import PropTypes from "prop-types";
import DOM from "react-dom";
import { Motion, spring, presets } from "react-motion";

const ScrollHorizontal = ({ props }) => {
  const [animValues, setAnimValues] = useState(0);

  const componentDidMount = () => {
    // Place the 'lock__' class on the HTML element - if toggled
    if (props.pageLock) {
      const orig = document.firstElementChild.className;
      document.firstElementChild.className =
        orig + (orig ? " " : "") + "locked__";
    }

    DOM.findDOMNode(hScrollParent).addEventListener("wheel", onScrollStart, {
      passive: false,
    });
  };

  const componentWillUnmount = () => {
    if (props.pageLock) {
      document.firstElementChild.className =
        document.firstElementChild.className.replace(/ ?locked__/, "");
    }

    DOM.findDOMNode(hScrollParent).removeEventListener("wheel", onScrollStart);
  };

  const componentDidUpdate = (prevProps) => {
    if (prevProps.animValues !== props.animValues) {
      let currentAnimValues = state.animValues;
      setState(
        {
          animValues: currentAnimValues + props.animValues,
        },
        calculate()
      );
    } else {
      calculate();
    }
  };

  const onScrollStart = (e) => {
    e.preventDefault();
    // If scrolling on x axis, change to y axis. Otherwise, just get the y deltas.
    // (Basically, this for Apple mice that allow horizontal scrolling by default)
    var rawData = e.deltaY ? e.deltaY : e.deltaX;
    var mouseY = Math.floor(rawData);

    // Bring in the existing animation values
    var animationValue = state.animValues;
    var newAnimationValue = animationValue + mouseY;
    var newAnimationValueNegative = animationValue - mouseY;

    if (!caniscroll()) {
      return;
    }

    var scrolling = () => {
      props.reverseScroll
        ? setAnimValues(newAnimationValueNegative)
        : setAnimValues(newAnimationValue);
    };

    // Begin Scrolling Animation
    window.requestAnimationFrame(scrolling);
  };

  const shouldComponentUpdate = (nextProps, nextState) => {
    if (
      true &&
      // Ensure component has been loaded
      calculate.timer !== void 0 &&
      props.children === nextProps.children &&
      state.animValues === nextState.animValues &&
      props.animValues === nextProps.animValues
    ) {
      return false;
    }

    if (
      true &&
      props.children === nextProps.children &&
      caniscroll() === false
    ) {
      return false;
    }

    return true;
  };

  const caniscroll = () => {
    let el = DOM.findDOMNode(hScrollParent);
    let rect = el.getBoundingClientRect();
    let scroller = el.firstElementChild;

    return (
      scroller.offsetLeft < rect.left ||
      scroller.offsetLeft + scroller.offsetWidth > rect.width
    );
  };

  const calculate = () => {
    // Cancel the previous calculate
    clearTimeout(calculate.timer);

    // Lazy to calculate, prevent max recurse call
    calculate.timer = setTimeout(() => {
      // Calculate the bounds of the scroll area
      let el = DOM.findDOMNode(hScrollParent);
      let rect = el.getBoundingClientRect();

      let max = el.lastElementChild.scrollWidth;
      let win = el.offsetWidth;

      // Get the new animation values
      var curr = state.animValues;

      // Establish the bounds. We do this every time b/c it might change.
      var bounds = -(max - win);

      // Logic to hold everything in place
      if (curr >= 1) {
        resetMin();
      } else if (curr <= bounds) {
        if (max > rect.width) {
          var x = bounds + 1;
          resetMax(x);
        } else {
          resetMax(0);
        }
      }
    });
  };

  const resetMin = () => {
    setState({ animValues: 0 });
  };

  const resetMax = (x) => {
    setState({ animValues: x });
  };

  const { config, style, children } = props;
  const { width, height } = style;
  const springConfig = config || presets.noWobble;

  // Styles
  const styles = {
    height: height || `100%`,
    width: width || `100%`,
    overflow: `hidden`,
    position: `relative`,
    ...style,
  };

  return (
    <div
      ref={(r) => {
        hScrollParent = r;
      }}
      style={styles}
      className={`scroll-horizontal ${props.className || ""}`}
    >
      <Motion style={{ z: spring(state.animValues, springConfig) }}>
        {({ z }) => {
          const scrollingElementStyles = {
            transform: `translate3d(${z}px, 0,0)`,
            display: `inline-flex`,
            height: `100%`,
            position: `absolute`,
            willChange: `transform`,
          };

          return <div style={scrollingElementStyles}>{children}</div>;
        }}
      </Motion>
    </div>
  );
};

ScrollHorizontal.propTypes = {
  reverseScroll: PropTypes.bool,
  pageLock: PropTypes.bool,
  config: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.array.isRequired,
  animValues: PropTypes.number,
};

ScrollHorizontal.defaultProps = {
  reverseScroll: false,
  pageLock: false,
  config: null,
  style: { width: `100%`, height: `100%` },
  className: null,
  animValues: null,
};

export default ScrollHorizontal;
