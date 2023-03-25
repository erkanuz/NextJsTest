import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import {BiConversation} from 'react-icons/bi'
import {CiSearch} from 'react-icons/ci'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

import { StyledSectionTitles } from '../../components/Typography/elements'
import { StyledSectionTitle, StyledSubTitle, StyledSectionContainer, StyledBoxes, StyledCard, StyledCardDes } from './elements'

{ /* If we want to make it shorter we can use local json, but then we can't use html tags like strong in it
const data = [
  {
    icon : <AiOutlineFundProjectionScreen size={50}/>,
    cardT : "Brief",
    cardD : "Complete brief writing or simple quidance on what to include, we've got you covered."
  },
  {
    icon : <CiSearch size={50} />,
    cardT : "Search",
    cardD : "In-depth agency search covering; criteria matching, door knocking and due-dilligence vetting."
  },
  {
    icon : <BiConversation size={50} />,
    cardT : "Pitch",
    cardD : "Comprehensive pitch management, include comms, diary management and pitch hosting."
  }
];
  //put after const Hero the next line before return
  const [a,b] = useState(data);
  //put in the return after <StyledSectionContainer>
        <StyledBoxes>
        {
          a.map((x,id) => (
            <StyledCard key={id}>
              <div>{x.icon}</div>
              <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer">
                <h2 className={styles.line}>{x.cardT}</h2>
                <StyledCardDes>{x.cardD}</StyledCardDes>
              </a>
            </StyledCard>
          )) 
        }
        </StyledBoxes>
*/ }

export const Hero = ({title, subtitle, ...props}) => {
  return (
    <div className={styles.grid} {...props}>
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
          <StyledCard>
            <AiOutlineFundProjectionScreen size={50} />
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer">
              <h2 className={styles.line}>Brief</h2>
              <StyledCardDes>
                Complete <strong> brief writing or <br /> simple quidance </strong> on what to <br /> include, we've got you covered.
              </StyledCardDes>
            </a>
          </StyledCard>

          <StyledCard>
            <CiSearch size={50} />
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer">
              <h2 className={styles.line}>Search</h2>
              <StyledCardDes>
                In-depth agency search covering;<br /> <strong> criteria matching</strong>, door knocking <br /> and due-dilligence vetting.
              </StyledCardDes>
            </a>
          </StyledCard>

          <StyledCard>
            <BiConversation size={50} />
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer">
              <h2 className={styles.line}>Pitch</h2>
              <StyledCardDes>
                Comprehensive <strong> pitch management</strong>,<br /> include comms, diary management<br /> and pitch hosting.
              </StyledCardDes>
            </a>
          </StyledCard>
        </StyledBoxes>
      </StyledSectionContainer>
    </div>
  )
}