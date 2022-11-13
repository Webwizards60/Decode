import React from "react";
import { motion } from "framer-motion";

export class ButtonPrimary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      space: this.props.space,
    };
  }
  render() {
    return (
      <div className="btnPrm">
        <div
          className="primaryShadow"
          style={{ width: this.props.width, height: this.props.height }}
        ></div>
        <button
          className="buttonPrimary"
          style={{
            width: this.props.width,
            height: this.props.height,
            fontSize: this.props.size,
            letterSpacing: this.props.space,
            fontWeight: this.props.weight,
          }}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export class SecondaryButton extends React.Component {
  render() {
    return (
      <>
        <span
          className="buttonSecondary"
          style={{
            fontSize: this.props.size,
            letterSpacing: this.props.space,
          }}
        >
          {this.props.text}
        </span>
      </>
    );
  }
}

export class Blob extends React.Component {
  render() {
    return (
      <>
        <div
          className="Blob"
          style={{ height: this.props.height, width: this.props.height }}
        ></div>
      </>
    );
  }
}

export class GlassInput extends React.Component {
  render() {
    return (
      <motion.input
        initial={{ y: "-50px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: this.props.duration,
          delay: this.props.delay,
          type: "spring",
          stiffness: 100,
        }}
        type={this.props.type}
        placeholder={this.props.placeholder}
        style={{
          height: this.props.height,
          width: this.props.width,
        }}
      />
    );
  }
}
