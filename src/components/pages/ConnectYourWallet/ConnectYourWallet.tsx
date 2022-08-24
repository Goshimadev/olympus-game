import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ERoute } from "src/constants";
import './ConnectYourWallet.scss';
import titanImage from '../../../images/titan.png';

interface IConnectYourWalletProps {}

export const ConnectYourWallet: React.FC<IConnectYourWalletProps> = () => {
    const navigate = useNavigate()

    const handleNavigateToSale = useCallback(() => {
        navigate(ERoute.SALE)
    }, [ navigate ])

    return (
        <div className="connect-wallet">
            <div className="connect-wallet__box">
                <p className="connect-wallet__box-text">Connect your wallet first to be able to get boxes.</p>
                <button 
                    className="connect-wallet__box-button"
                    onClick={handleNavigateToSale}
                >
                    connect your wallet
                </button>
                <img className="connect-wallet__box-image" src={titanImage} alt="Titan" />
            </div>
        </div>
    )
}