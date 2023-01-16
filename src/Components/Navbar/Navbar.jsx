import React from 'react'
import styles from "./Nav.module.css"
import {
    Box, Button, Flex, IconButton, Text, useColorMode,
    Hide,
    Show,
} from "@chakra-ui/react"
import { FaSun, FaMoon } from "react-icons/fa"
import { Link } from "react-scroll"
import Sidebar from './Sidebar'

import Resume from "../Home/Image/Deepkamal.pdf"



const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === "dark"
    
    return (
        <>

            <Box  className={styles.main}>
                <Box className={styles.left}>
                    <Box className={styles.name}>
                        <Flex>
                            <span>
                                <Link to='Navbar'   spy={true} smooth={true}>
                                 <Text  cursor= "pointer"  color={'yellow'}>DEEP</Text>
                                </Link>
                               
                            </span>
                            <span>
                            <Link to='Navbar'  spy={true} smooth={true}>
                                <Text   cursor= "pointer" color={'#075985 '}>KAMAL</Text>
                                </Link>
                                
                            </span>
                        </Flex>


                    </Box>


                </Box>





                <Box  className={styles.right}>
                    <Hide below='md'>
       <Box className={styles.list}>
                        <ul>
                            <li>
                                <Link activeClass='active' to="Navbar" offset={-55} spy={true} smooth={true}>
                                    HOME
                                </Link>


                            </li>
                            <li>
                                <Link to="tech-stack"  spy={true} smooth={true} offset={-50} >
                                    TECH-STACK
                                </Link>


                            </li>
                            <li>
                                <Link to="skills" spy={true} offset={-50} smooth={true}>
                                    SKILLS
                                </Link>


                            </li>
                          
                            <li>
                                <Link to="projects" offset={-175} spy={true} smooth={true}>
                                    PROJECT-BLOGS
                                </Link>


                            </li>
                            <li>
                                <Link to="Navbar" spy={true} offset={-50} smooth={true}>   
                                </Link>
                                
                                <a href={Resume} download="Deepkaml_yadav_Resume"  onClick={()=>window.open ("https://drive.google.com/drive/u/0/folders/15mxuyODHod1h6RL8cskxHktMizBVL8X2")}>RESUME</a>

                            </li>

                        </ul>
                    </Box>
                    </Hide>
             
                    <Hide below='sm' >
                        <Link to="contact" spy={true} smooth={true}>
                        <Button size={'sm'} mt={2} outline='none' _focus={{outline:"none"}}>CONTACT ME</Button>
                    </Link>
                    </Hide>
                    
                    <IconButton _focus={{outline:"none"}} size='sm' m={2} onClick={toggleColorMode} icon={isDark ? <FaSun /> : <FaMoon />} />

{/* ----------------------------------------------------------------------------------------- */}

<Show below='md'>
<Sidebar/>
</Show>


                </Box>

            </Box>


        </>
    )
}

export default Navbar