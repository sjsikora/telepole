import React from 'react';

type CityModalProps = {
    open: boolean,
    onClose: () => void,
    children: string
};

const CityModal:React.FC<CityModalProps> = ({ open, onClose, children}) => {

    return <div className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
        
    </div>
}
export default CityModal;