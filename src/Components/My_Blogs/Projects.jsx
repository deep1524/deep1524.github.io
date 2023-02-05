import React, { useEffect } from "react";
import styles from "./Pro.module.css";
import { FaGithub, FaLink } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Text,
  SimpleGrid,
  Box,
  Flex,
  Button,
  IconButton,
  color,
  Link,
} from "@chakra-ui/react";
import cartlane1 from "./caratlane_img/cartlane3.png";
import cartlane2 from "./caratlane_img/cartlane1.png";
import cartlane3 from "./caratlane_img/cartlane2.png";

import Nordstrom1 from "./Nordstrom_img/Nordstrom1.png";
import Nordstrom2 from "./Nordstrom_img/Nordstrom2.png";
import Nordstrom3 from "./Nordstrom_img/Nordstrom3.png";
import anthro1 from "./anthro_img/anthro1.png";
import anthro2 from "./anthro_img/anthro2.png";
import anthro3 from "./anthro_img/anthro3.png";
import snake1 from "./Snakegame_img/snake1.png";
import snake2 from "./Snakegame_img/snake2.png";
import snake3 from "./Snakegame_img/snake3.png";

import Aos from "aos";
import "aos/dist/aos.css";
export const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Text
        mt={20}
        fontSize={"xx-large"}
        fontWeight="semibold"
        color={"#075985 "}
        textAlign="center"
      >
        MY PROJECTS
      </Text>
      <SimpleGrid
        name="projects"
        h="auto"
        w={["97%", "95%", "90%", "90%"]}
        m="auto"
        p={3}
        columns={[1, 1, 2]}
        mt={"20px"}
        borderRadius="7px"
        boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
      >
        <Box data-aos="fade-up" data-aos-duration="1500">
          <Box w="95%" p={3}>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={2}
              infiniteLoop={true}
              showStatus={false}
              showArrows={true}
            >
              <div>
                <img
                  style={{ borderRadius: "7px", height: "300px" }}
                  src={cartlane1}
                  alt="outlook1"
                />
              </div>
              <div>
                <img
                  style={{ borderRadius: "7px", height: "300px" }}
                  src={cartlane2}
                  alt="outlook1"
                />
              </div>
              <div>
                <img
                  style={{ borderRadius: "7px", height: "300px" }}
                  src={cartlane3}
                  alt="outlook1"
                />
              </div>
            </Carousel>
            <div className={styles.text}>
              <Text
                mt={2}
                textDecoration="underline"
                fontSize="xx-large"
                textAlign={"center"}
                color={"yellowGreen"}
                fontWeight="semibold"
                font
              >
                Caratlane.com
              </Text>
            </div>
          </Box>
        </Box>

        <Box data-aos="fade-up" data-aos-duration="1500">
          <Box p={3}>
            <Text letterSpacing={1.5} fontSize={"x-large"} color="yellowGreen">
              About Project
            </Text>
            <div>
              <Text color="gray.400">
                CaratLane provides the exquisite craftsmanship of beautiful
                jewellery designs such as rings, earrings, pendants, necklace,
                chains, bangles, bracelets, mangalsutra, nose pins. Apart from
                jewellery, CaratLane offers 22k (916) and 24k (995) gold coins
                with certification and the guarantee of a BIS Hallmarked stamp{" "}
              </Text>
            </div>
            <Text fontSize={"x-large"} color="yellowGreen">
              Tech-Stack
            </Text>
            <Text fontSize={"large"} color="gray.400">
              HTML | CSS | REACT | JAVASCRIPT | EXPRESS-JS | MONGODB | JWT |
              MONGOOSE | CHAKRA-UI.
            </Text>
            <Text fontSize={"x-large"} color="yellowGreen">
              Role
            </Text>
            <Text fontSize={"large"} color="gray.400">
              It was an group project for 5 members, and I had built
              Sign-in/Sign-up page with validation. and Admin Backend ,Admim
              Deshboard page.
            </Text>

            <Flex gap={"30px"} mt={2}>
              <Link
                href="https://github.com/deep1524/ambiguous-heat-2587"
                isExternal={true}
              >
                <Flex bg={"aqua"} borderRadius={4}>
                  <IconButton
                    _focus={{ outline: "none" }}
                    color="black"
                    colorScheme="aqua"
                    size="md"
                    icon={<FaGithub />}
                  />
                  <Button
                    _focus={{ outline: "none" }}
                    color="black"
                    pl={"0px"}
                    colorScheme="aqua"
                  >
                    {" "}
                    Source Code{" "}
                  </Button>
                </Flex>
              </Link>
              <Link href="https://crystalgoldshop.netlify.app" isExternal>
                <Flex bg={"aqua"} borderRadius={4}>
                  <IconButton
                    _focus={{ outline: "none" }}
                    color="black"
                    colorScheme="aqua"
                    size="md"
                    icon={<FaLink />}
                  />
                  <Button
                    _focus={{ outline: "none" }}
                    color="black"
                    pl={"0px"}
                    colorScheme="aqua"
                  >
                    {" "}
                    Live{" "}
                  </Button>
                </Flex>
              </Link>
            </Flex>
          </Box>
        </Box>
      </SimpleGrid>

      <SimpleGrid
        h="auto"
        p={3}
        w={["97%", "95%", "90%", "90%"]}
        m="auto"
        columns={[1, 1, 2]}
        mt={9}
        borderRadius="7px"
        boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
      >
        <div data-aos="fade-up" data-aos-duration="1500">
          <Box w="95%" p={3}>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={2}
              infiniteLoop={true}
              showStatus={false}
              showArrows={true}
            >
              <div>
                <img
                  style={{ borderRadius: "7px", height: "300px" }}
                  src={Nordstrom1}
                  alt="outlook1"
                />
              </div>
              <div>
                <img
                  style={{ borderRadius: "7px", height: "300px" }}
                  src={Nordstrom2}
                  alt="outlook1"
                />
              </div>
              <div>
                <img
                  style={{ borderRadius: "7px", height: "300px" }}
                  src={Nordstrom3}
                  alt="outlook1"
                />
              </div>
            </Carousel>
            <div className={styles.text}>
              <Text
                mt={2}
                textDecoration="underline"
                fontSize="xx-large"
                textAlign={"center"}
                color={"yellowGreen"}
                fontWeight="semibold"
                font
              >
                Nordstrom.com
              </Text>
            </div>
          </Box>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <Box p={3}>
            <Text letterSpacing={1.5} fontSize={"x-large"} color="yellowGreen">
              About Project
            </Text>
            <div>
              <Text color="gray.400">
                Nordstrom is an American luxury department store chain
                headquartered in Seattle, Washington and founded by John W.
                Nordstrom and Carl F. Wallin in 1901. The original Wallin &
                Nordstrom store operated exclusively as a shoe store, and a
                second Nordstrom's shoe store opened in 1923.
              </Text>
            </div>
            <Text fontSize={"x-large"} color="yellowGreen">
              Tech-Stack
            </Text>
            <Text fontSize={"large"} color="gray.400">
              HTML | CSS | Javascript | JSON-Server
            </Text>
            <Text fontSize={"x-large"} color="yellowGreen">
              Role
            </Text>
            <Text fontSize={"large"} color="gray.400">
              It was an group project for 6 members, and I had built home page
              which shows different categories of Hd images And also build
              category Home page
            </Text>

            <Flex gap={"30px"} mt={2}>
              <Link href="https://github.com/Devender0014/NordStrom" isExternal>
                <Flex bg={"aqua"} borderRadius={4}>
                  <IconButton
                    _focus={{ outline: "none" }}
                    color="black"
                    colorScheme="aqua"
                    size="md"
                    icon={<FaGithub />}
                  />
                  <Button
                    _focus={{ outline: "none" }}
                    color="black"
                    pl={"0px"}
                    colorScheme="aqua"
                  >
                    {" "}
                    Source Code{" "}
                  </Button>
                </Flex>
              </Link>
              <Link
                href="https://classy-palmier-91027f.netlify.app/"
                isExternal
              >
                <Flex bg={"aqua"} borderRadius={4}>
                  <IconButton
                    _focus={{ outline: "none" }}
                    color="black"
                    colorScheme="aqua"
                    size="md"
                    icon={<FaLink />}
                  />
                  <Button
                    _focus={{ outline: "none" }}
                    color="black"
                    pl={"0px"}
                    colorScheme="aqua"
                  >
                    {" "}
                    Live
                  </Button>
                </Flex>
              </Link>
            </Flex>
          </Box>
        </div>
      </SimpleGrid>

      <SimpleGrid
        h="auto"
        p={3}
        w={["97%", "95%", "90%", "90%"]}
        m="auto"
        columns={[1, 1, 2]}
        mt={9}
        borderRadius="7px"
        boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
      >
        <div data-aos="fade-up" data-aos-duration="1500">
          <Box w="95%" p={3}>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={2}
              infiniteLoop={true}
              showStatus={false}
              showArrows={true}
            >
              <div>
                <img
                  style={{ borderRadius: "7px", height: "300px" }}
                  src={anthro1}
                  alt="outlook1"
                />
              </div>
              <div>
                <img
                  style={{ borderRadius: "7px", height: "300px" }}
                  src={anthro2}
                  alt="outlook1"
                />
              </div>
              <div>
                <img
                  style={{ borderRadius: "7px", height: "300px" }}
                  src={anthro3}
                  alt="outlook1"
                />
              </div>
            </Carousel>
            <div className={styles.text}>
              <Text
                mt={2}
                textDecoration="underline"
                fontSize="xx-large"
                textAlign={"center"}
                color={"yellowGreen"}
                fontWeight="semibold"
                font
              >
                Anthropologie.com
              </Text>
            </div>
          </Box>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <Box p={3}>
            <Text letterSpacing={1.5} fontSize={"x-large"} color="yellowGreen">
              About Project
            </Text>
            <div>
              <Text color="gray.400">
                Anthropologie is a unique, full-lifestyle shopping destination,
                with a mostly exclusive assortment of clothing, shoes,
                accessories, beauty, furniture, home décor, garden, bridal, and
                more.
              </Text>
            </div>
            <Text fontSize={"x-large"} color="yellowGreen">
              Tech-Stack
            </Text>
            <Text fontSize={"large"} color="gray.400">
              "HTML | CSS | Javascript | Chakra UI | React | Redux
            </Text>
            <Text fontSize={"x-large"} color="yellowGreen">
              Role
            </Text>
            <Text fontSize={"large"} color="gray.400">
              It was an group project for 6 members, and I had built product
              page along with so much functionality like sorting,filtering etc.{" "}
            </Text>

            <Flex gap={"30px"} mt={2}>
              <Link
                href="https://github.com/deep1524/Anthropologie.com-clone/tree/main/anthro"
                isExternal
              >
                <Flex bg={"aqua"} borderRadius={4}>
                  <IconButton
                    _focus={{ outline: "none" }}
                    color="black"
                    colorScheme="aqua"
                    size="md"
                    icon={<FaGithub />}
                  />
                  <Button
                    _focus={{ outline: "none" }}
                    color="black"
                    pl={"0px"}
                    colorScheme="aqua"
                  >
                    {" "}
                    Source Code{" "}
                  </Button>
                </Flex>
              </Link>
              <Link
                href="https://cheery-basbousa-652da1.netlify.app/"
                isExternal
              >
                <Flex bg={"aqua"} borderRadius={4}>
                  <IconButton
                    _focus={{ outline: "none" }}
                    color="black"
                    colorScheme="aqua"
                    size="md"
                    icon={<FaLink />}
                  />
                  <Button
                    _focus={{ outline: "none" }}
                    color="black"
                    pl={"0px"}
                    colorScheme="aqua"
                  >
                    {" "}
                    Live
                  </Button>
                </Flex>
              </Link>
            </Flex>
          </Box>
        </div>
      </SimpleGrid>

      <SimpleGrid
        h="auto"
        p={3}
        w={["97%", "95%", "90%", "90%"]}
        m="auto"
        columns={[1, 1, 2]}
        mt={9}
        borderRadius="7px"
        boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
      >
        <div data-aos="fade-up" data-aos-duration="1500">
          <Box w="95%" p={3}>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={2}
              infiniteLoop={true}
              showStatus={false}
              showArrows={true}
            >
              <div>
                <img
                  style={{ borderRadius: "7px", height: "300px" }}
                  src={snake1}
                  alt="outlook1"
                />
              </div>
              <div>
                <img
                  style={{ borderRadius: "7px", height: "300px" }}
                  src={snake2}
                  alt="outlook1"
                />
              </div>
              <div>
                <img
                  style={{ borderRadius: "7px", height: "300px" }}
                  src={snake3}
                  alt="outlook1"
                />
              </div>
            </Carousel>
            <div className={styles.text}>
              <Text
                mt={2}
                textDecoration="underline"
                fontSize="xx-large"
                textAlign={"center"}
                color={"yellowGreen"}
                fontWeight="semibold"
                font
              >
                Snake Game
              </Text>
            </div>
          </Box>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <Box p={3}>
            <Text letterSpacing={1.5} fontSize={"x-large"} color="yellowGreen">
              About Project
            </Text>
            <div>
              <Text color="gray.400">
                A Nostalgic game named as Snake game in which you can play with
                4 buttons (up,down,right,left) without crashing into the wall.
              </Text>
            </div>
            <Text fontSize={"x-large"} color="yellowGreen">
              Tech-Stack
            </Text>
            <Text fontSize={"large"} color="gray.400">
              "HTML | CSS | Javascript
            </Text>
            <Text fontSize={"x-large"} color="yellowGreen">
              Role
            </Text>
            <Text fontSize={"large"} color="gray.400">
              Its individual project. I am completed with in 5 days{" "}
            </Text>

            <Flex gap={"30px"} mt={2}>
              <Link href="https://github.com/deep1524/Snake-Game" isExternal>
                <Flex bg={"aqua"} borderRadius={4}>
                  <IconButton
                    _focus={{ outline: "none" }}
                    color="black"
                    colorScheme="aqua"
                    size="md"
                    icon={<FaGithub />}
                  />
                  <Button
                    _focus={{ outline: "none" }}
                    color="black"
                    pl={"0px"}
                    colorScheme="aqua"
                  >
                    {" "}
                    Source Code{" "}
                  </Button>
                </Flex>
              </Link>
              <Link
                href="https://charming-pothos-a5c994.netlify.app"
                isExternal
              >
                <Flex bg={"aqua"} borderRadius={4}>
                  <IconButton
                    _focus={{ outline: "none" }}
                    color="black"
                    colorScheme="aqua"
                    size="md"
                    icon={<FaLink />}
                  />
                  <Button
                    _focus={{ outline: "none" }}
                    color="black"
                    pl={"0px"}
                    colorScheme="aqua"
                  >
                    {" "}
                    Live
                  </Button>
                </Flex>
              </Link>
            </Flex>
          </Box>
        </div>
      </SimpleGrid>
    </>
  );
};
