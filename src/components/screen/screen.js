import React from 'react'
import Style from "./screen.module.css"

export default class screen extends React.Component {
  render() {
    const {activeItem, screendata} = this.props;
    return (
      <div className={Style.display}>
        <img src="" alt="" />
        <div className={Style.menu_display}>
          <h2 className={Style.heading}>{screendata[0].heading}</h2>
          <div className={Style.menu}>
            {screendata[0].data.map((data, index) => (
              <p key={index} className={activeItem === data ? Style.active : ''}>{data}</p>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
