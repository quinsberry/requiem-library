import React from 'react'

import questionCircleSvg from '../../assets/question-circle.svg'
import locationSvg from '../../assets/location-icon-svg.svg'
import './BossCard.scss'

type Props = {
  name: string
  experience: string
  additionalInfo: String
  location: string
  links?: {
    name?: string
    additionalInfo?: string
    location?: string
  }
}

const BossCard: React.FC<Props> = ({ name, experience, additionalInfo, location, links }) => {
  return (
    <div className="bossCard">
      <img src={questionCircleSvg} alt="Info icon" className="bossCard-info"></img>
      <div className="bossCard-content">
        {links?.name ? (
          <h4 className="bossCard-content__name">
            <a href={links.name} target="_blank">
              {name}
            </a>
          </h4>
        ) : (
          <h4 className="bossCard-content__name">{name}</h4>
        )}
        <span className="bossCard-content__experience">
          <b>Опыт:</b> {experience}
        </span>
        {links?.additionalInfo ? (
          <p className="bossCard-content__additional">
            <a href={links.additionalInfo} target="_blank">
              {additionalInfo}
            </a>
          </p>
        ) : (
          <p className="bossCard-content__additional">{additionalInfo}</p>
        )}

        <div className="bossCard-content__location">
          {links?.location ? (
            <a href={links.location} target="_blank">
              <div className="bossCard-content__location--icon">
                <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
                  <g>
                    <g>
                      <path
                        fill="black"
                        d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
			c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
			C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
			s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </div>
              <span className="bossCard-content__location--text">{location}</span>
            </a>
          ) : (
            <>
              <div className="bossCard-content__location--icon">
                <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
                  <g>
                    <g>
                      <path
                        fill="black"
                        d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
			c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
			C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
			s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </div>
              <span className="bossCard-content__location--text">{location}</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default BossCard
