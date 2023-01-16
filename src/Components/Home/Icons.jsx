import React from 'react'
import styles from "./About.module.css"

import { IconButton, Link } from "@chakra-ui/react"
import { FaGithub,FaLinkedin} from "react-icons/fa"
const Icons = () => {
  return (
    <>

    <Link href="https://github.com/deep1524" isExternal>
       <IconButton  _focus={{outline:"none"}} size='lg'  icon={<FaGithub/>} />   
    </Link>
  <Link href="https://www.linkedin.com/in/deep-yadav-6bbb1522b/" isExternal>
   <IconButton size='lg' _focus={{outline:"none"}}   icon={<FaLinkedin/>} />  
  </Link>
           
    
    </>
  )
}

export default Icons