import * as React from 'react';
import ReactDOM from 'react-dom/client';

import AppWrapper from './styles';

import DemoI from './components/Switch/demo/demo_简单使用';
import DemoII from './components/Switch/demo/demo_失效状态';
import DemoIII from './components/Switch/demo/demo_文字和图标';
import DemoIV from './components/Switch/demo/demo_两种大小';
import DemoV from './components/Switch/demo/demo_加载中';

const App = () => {
    return(
        <AppWrapper>
            <DemoI />
            <DemoII />
            <DemoIII />
            <DemoIV />
            <DemoV />
        </AppWrapper>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);