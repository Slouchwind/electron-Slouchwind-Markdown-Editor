import React from "react";
import WuX from "./wux-ui-react";

export default function Basic({ children }) {
    return (
        <React.StrictMode>
            <WuX.HeaderMargin>
                <WuX.Header
                    title='Slouchwind Markdown Editor'
                    small='Menu'
                    type='fixed'
                    option={[
                        { title: 'GitHub', link: 'https://github.com/Slouchwind/electron-Slouchwind-Markdown-Editor' },
                        { title: 'Slouchwind', link: 'https://slouchwind.tk', bold: true },
                    ]}
                />
                <WuX.Container>
                    {children}
                </WuX.Container>
            </WuX.HeaderMargin>
        </React.StrictMode>
    );
}