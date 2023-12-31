import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import {
  VStack,
  useDisclosure,
  Button,
  Text,
  HStack,
  Select,
  Input,
  Spacer,
  Box,
  Flex,
  Image,
  Icon,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";
import Jazzicon from "@metamask/jazzicon";
import thay from "../assets/imgs/thay.jpg";
import styled from "@emotion/styled";
const StyledIdenticon = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 1.125rem;
  background-color: black;
`;

import SelectWalletModal from "../Modal";
import { Tooltip } from "@chakra-ui/react";
import { truncateAddress } from "../utils";
import { useConnect, useAccount, useNetwork, useSignMessage } from "wagmi";

export default function Header(props) {
  const { accountBalance, address } = props;
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setAnimation(true);
  }, []);
  function Identicon() {
    const ref = useRef < HTMLDivElement > null;
    useEffect(() => {
      if (accountData.address && ref.current) {
        ref.current.innerHTML = "";
        ref.current.appendChild(
          Jazzicon(16, parseInt(accountData.address.slice(2, 10), 16))
        );
      }
    }, [accountData.address]);

    return <StyledIdenticon refs={ref} />;
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [{ data: connectData }] = useConnect();
  const [{ data: accountData }, disconnect] = useAccount();
  const [{ data: networkData }, switchNetwork] = useNetwork();
  const [message, setMessage] = useState("");
  const [{ data: signData }, signMessage] = useSignMessage({
    message,
  });
  const [error, setError] = useState("");
  const [network, setNetwork] = useState(undefined);
  const handleNetwork = (e) => {
    const id = e.target.value;
    setNetwork(Number(id));
  };

  const handleInput = (e) => {
    const msg = e.target.value;
    setMessage(msg);
  };

  return (
    <>
      <Flex
        width="100%"
        margin="auto"
        py="2"
        px="20"
        background="gray"
        minWidth="500px"
      >
        <Spacer />
        <HStack>
          <Box as="a" href="https://www.tothemars.in">
            <Icon color="#F58634" as={AiFillHome} boxSize="25px" />
          </Box>
          <Box>
            {connectData.connected ? (
              <Box
                display="flex"
                alignItems="center"
                background="teal.700"
                borderRadius="xl"
                py="0"
              >
                <Box px="3">
                  <Text color="white" fontSize="md">
                    {/* {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(5)} ETH */}
                    {accountBalance ? accountBalance + " ETH" : ""}
                  </Text>
                </Box>
                <Button
                  // onClick={handleOpenModal}
                  bg="teal.600"
                  border="1px solid transparent"
                  _hover={{
                    border: "1px",
                    borderStyle: "solid",
                    borderColor: "teal.500",
                    backgroundColor: "teal.500",
                  }}
                  borderRadius="xl"
                  m="1px"
                  px={3}
                  height="38px"
                >
                  <Tooltip label={address} placement="top-end">
                    <Text
                      color="white"
                      fontSize="md"
                      fontWeight="medium"
                      mr="2"
                    >
                      {`ID Tài Khoản: ${truncateAddress(address)}`}
                    </Text>
                  </Tooltip>

                  <>{<Identicon />}</>
                </Button>
              </Box>
            ) : (
              <Button
                onClick={onOpen}
                bg="#F58634"
                color="black"
                borderRadius="25px"
                border="1px solid transparent"
              >
                Connect to a wallet
              </Button>
            )}
          </Box>
        </HStack>
      </Flex>

      <div>
      <div className="waviy">
          <span style={{ "--i": 1 }}>C</span>
          <span style={{ "--i": 2 }}>Ô</span>
          <span style={{ "--i": 3 }}>N</span>
          <span style={{ "--i": 4 }}>G</span>
          <span style={{ "--i": 5 }}>-</span>
          <span style={{ "--i": 6 }}>N</span>
          <span style={{ "--i": 7 }}>G</span>
          <span style={{ "--i": 8 }}>h</span>
          <span style={{ "--i": 9 }}>Ệ</span>
          <span style={{ "--i": 10 }}>-</span>
          <span style={{ "--i": 11 }}>M</span>
          <span style={{ "--i":12 }}>Ớ</span>
          <span style={{ "--i": 13 }}>I</span>
        </div>
        <nav class="flex justify-center py-3">
          <ul class="flex space-x-4">
            <li>
              <Link
                class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
                to="introl"
              >
                Introl
              </Link>
            </li>
            <li>
              <Link
                class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
                to="home"
              >
                Trang Chủ
              </Link>
            </li>

            <li>
              <Link
                class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
                to="transfermony"
              >
                Chuyển Tiền
              </Link>
            </li>
            <li>
              <Link
                class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
                to="history"
              >
                Lịch Sử
              </Link>
            </li>

            <li></li>
          </ul>
        </nav>
        <Outlet />
      </div>
      <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
    </>
  );
}
