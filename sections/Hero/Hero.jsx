import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import CardData from '@/components/Card/CardData'
import { StyledSectionTitles, StyledSectionTitle, StyledSubTitle, StyledSectionMain, StyledSectionContainer, StyledBoxes, StyledCard, StyledCardTitle, StyledCardDes } from './elements'

export const Hero = ({title, subtitle, ...props}) => {
  return (
    <StyledSectionMain {...props}>
      <Image
      src='/images/background.png'
      alt='/'
      fill
      className={styles.BgImage}
      priority
      />
    <div className={styles.grid}>
      <StyledSectionTitles>
        <StyledSectionTitle>{title}</StyledSectionTitle>
        <StyledSubTitle>{subtitle}</StyledSubTitle>
      </StyledSectionTitles>

      <StyledSectionContainer>
        <Image
          src={'https://images.pexels.com/photos/13748845/pexels-photo-13748845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
          alt='/'
          width={400}
          height={600}
          className={styles.image}
          priority
        />
        <StyledBoxes>
        {
          CardData && CardData.map((x,id) => (
            <StyledCard key={id}>
              <div>{x.icon}</div>
              <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer">
                <StyledCardTitle>{x.cardT}</StyledCardTitle>
                {
                  x.Description && x.Description.map((y,ix) => {
                    return (
                      <StyledCardDes key={ix}>
                        {y.cardD}<strong> {y.cardD2} </strong>{y.cardD3}
                      </StyledCardDes>
                    )
                  })
                }
              </a>
            </StyledCard>
          )) 
        }
        </StyledBoxes>
      </StyledSectionContainer>
    </div>
    </StyledSectionMain>
  )
}