import {BiConversation} from 'react-icons/bi'
import {CiSearch} from 'react-icons/ci'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const CardData = [
    {
      icon : <AiOutlineFundProjectionScreen size={50}/>,
      cardT : "Brief",
      Description: [{
        cardD : "Complete",
        cardD2 : "brief writing or simple quidance",
        cardD3 : "on what to include, we've got you covered."
      }],
    },
    {
      icon : <CiSearch size={50} />,
      cardT : "Search",
      Description: [{
        cardD : "In-depth agency search covering;",
        cardD2 : "criteria matching, ",
        cardD3 : "door knocking and due-dilligence vetting."
      }],
    },
    {
      icon : <BiConversation size={50} />,
      cardT : "Pitch",
      Description: [{
        cardD : "Comprehensive",
        cardD2 : "pitch management, ",
        cardD3 : "include comms, diary management and pitch hosting."
      }],
    }
  ]

  export default CardData;