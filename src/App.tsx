import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header/Header';
import { MobileMenu } from './components/MobileMenu/MobileMenu';
import { Characters } from './components/pages/Characters/Characters';
import { Evolving } from './components/pages/Characters/Evolving/Evolving';
import { Summary } from './components/pages/Characters/Summary/Summary';
import { Training } from './components/pages/Characters/Training/Training';
import { Chests } from './components/pages/Chests/Chests';
import { ConnectYourWallet } from './components/pages/ConnectYourWallet/ConnectYourWallet';
import { Foundry } from './components/pages/Foundry/Foundry';
import { Homepage } from './components/pages/Homepage/Homepage';
import { ItemInfo } from './components/pages/ItemInfo/ItemInfo';
import { AllItems } from './components/pages/Marketplace/AllItems/AllItems';
import { Auction } from './components/pages/Marketplace/Auction/Auction';
import { Collection } from './components/pages/Marketplace/Collection/Collection';
import { Market } from './components/pages/Marketplace/Market/Market';
import { Marketplace } from './components/pages/Marketplace/Marketplace';
import { MarketSale } from './components/pages/Marketplace/MarketSale/MarketSale';
import { PastAuctions } from './components/pages/Marketplace/PastAuctions/PastAuctions';
import { Sale } from './components/pages/Sale/Sale';
import { SideMenu } from './components/SideMenu/SideMenu';
import { ERoute } from './constants';
import { CharactersContextProvider } from './context/CharactersContext/CharactersContext';
import { FoundryPageContextProvider } from './context/FoundryPageContext/FoundryPageContext';
import { MarketplaceContextProvider } from './context/MarketplaceContext/MarketplaceContext';
import { UserContextProvider } from './context/UserContext/UserContext';

interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
  const location = useLocation()

  return (
    <div 
      className='app'
      style={
        location.pathname === '/connect-your-wallet' 
        || location.pathname === '/sale'
        || location.pathname === '/presenting' 
        || location.pathname.includes('/item-info')
        ? {maxWidth: 'none', width: '100%'} 
        : null
      }
    >
      <UserContextProvider>
        <CharactersContextProvider>
          <FoundryPageContextProvider>
            <MarketplaceContextProvider>
              {location.pathname !== '/connect-your-wallet' 
              && location.pathname !== '/sale'
              && location.pathname !== '/presenting' 
              && !location.pathname.includes('/item-info')
              ? <SideMenu /> 
              : null
              }
              <main 
                className='app__main' 
                style={
                  location.pathname === '/connect-your-wallet' 
                  || location.pathname === '/sale'
                  || location.pathname === '/presenting'
                  || location.pathname.includes('/item-info') 
                  ? {padding: 0, margin: '0 auto', maxWidth: '1440px'} 
                  : null
                }
              >
                {location.pathname !== '/connect-your-wallet' 
                && location.pathname !== '/sale'
                && location.pathname !== '/presenting' 
                ? <Header />
                : null
                }
                <Routes>
                  <Route path={ERoute.HOMEPAGE} element={<Homepage />} />
                  <Route path={ERoute.CHARACTERS} element={<Characters />}>
                    <Route path={ERoute.SUMMARY} element={<Summary />} />
                    <Route path={ERoute.EVOLVING} element={<Evolving />} />
                    <Route path={ERoute.TRAINING} element={<Training />} />
                  </Route>
                  <Route path={ERoute.CHESTS} element={<Chests />} />
                  <Route path={ERoute.FOUNDRY} element={<Foundry />} />
                  <Route path={ERoute.MARKETPLACE} element={<Marketplace />}>
                    <Route path={ERoute.MARKET} element={<Market />}>
                      <Route path={ERoute.ALL_ITEMS} element={<AllItems />} />
                      <Route path={ERoute.MARKET_SALE} element={<MarketSale />} />
                      <Route path={ERoute.AUCTION} element={<Auction />} />
                      <Route path={ERoute.PAST_AUCTIONS} element={<PastAuctions />} />
                    </Route>
                    <Route path={ERoute.COLLECTION} element={<Collection />} />
                  </Route>
                  <Route path={ERoute.ITEM_INFO} element={<ItemInfo />} />
                  <Route path={ERoute.CONNECT_YOUR_WALLET} element={<ConnectYourWallet />} />
                  <Route path={ERoute.SALE} element={<Sale />} />
                </Routes>
              </main>
              {location.pathname !== '/connect-your-wallet'
              && location.pathname !== '/sale'
              && location.pathname !== '/presenting' 
              ? <MobileMenu /> 
              : null
              }
              </MarketplaceContextProvider> 
          </FoundryPageContextProvider>
        </CharactersContextProvider>
      </UserContextProvider>
    </div>
  )
}

export default App;
