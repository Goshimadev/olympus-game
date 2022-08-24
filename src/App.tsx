import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
import { Marketplace } from './components/pages/Marketplace/Marketplace';
import { Sale } from './components/pages/Sale/Sale';
import { SideMenu } from './components/SideMenu/SideMenu';
import { ERoute } from './constants';
import { CharactersContextProvider } from './context/CharactersContext/CharactersContext';
import { FoundryPageContextProvider } from './context/FoundryPageContext/FoundryPageContext';
import { UserContextProvider } from './context/UserContext/UserContext';

interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
  const location = useLocation()

  return (
    <div className='app'>
      <UserContextProvider>
        <CharactersContextProvider>
          <FoundryPageContextProvider>
              {location.pathname !== '/connect-your-wallet' && 
              location.pathname !== '/sale' && 
              location.pathname !== '/presenting' ? 
                <SideMenu /> : null
              }
              <main 
                className='app__main' 
                style={
                  location.pathname === '/connect-your-wallet' || 
                  location.pathname === '/sale' || 
                  location.pathname === '/presenting' 
                    ? {padding: 0} 
                    : null
                }
              >
                {location.pathname !== '/connect-your-wallet' && 
                location.pathname !== '/sale' && 
                location.pathname !== '/presenting' ? 
                  <Header /> : null
                }
                <TransitionGroup>
                  <CSSTransition key={location.key} classNames="approuter" timeout={300} unmountOnExit>
                    <Routes location={location}>
                      <Route path={ERoute.HOMEPAGE} element={<Homepage />} />
                      <Route path={ERoute.CHARACTERS} element={<Characters />}>
                        <Route path={ERoute.SUMMARY} element={<Summary />} />
                        <Route path={ERoute.EVOLVING} element={<Evolving />} />
                        <Route path={ERoute.TRAINING} element={<Training />} />
                      </Route>
                      <Route path={ERoute.CHESTS} element={<Chests />} />
                      <Route path={ERoute.FOUNDRY} element={<Foundry />} />
                      <Route path={ERoute.MARKETPLACE} element={<Marketplace />} />
                      <Route path={ERoute.CONNECT_YOUR_WALLET} element={<ConnectYourWallet />} />
                      <Route path={ERoute.SALE} element={<Sale />} />
                    </Routes>
                  </CSSTransition>
                </TransitionGroup>
              </main>
              {location.pathname !== '/connect-your-wallet' && 
              location.pathname !== '/sale' && 
              location.pathname !== '/presenting' ? 
                <MobileMenu /> : null
              }
          </FoundryPageContextProvider>
        </CharactersContextProvider>
      </UserContextProvider>
    </div>
  )
}

export default App;
