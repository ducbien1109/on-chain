import { chain, defaultChains } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { WalletLinkConnector } from "wagmi/connectors/walletLink";

// import { InjectedConnector } from "@web3-react/injected-connector";
// import { WalletConnectConnector } from "@wagmi/web3-react";
// import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const infuraId = process.env.INFURA_ID;

const chains = defaultChains;

export const connectors = ({ chainId }) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0];
  return [
    new WalletLinkConnector({
      options: {
        appName: "My wagmi app",
        jsonRpcUrl: `${rpcUrl}/${infuraId}`
      }
    }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true
      }
    }),
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true }
    })
  ];
};
