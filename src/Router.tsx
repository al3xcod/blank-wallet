// ## global imports ##
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

// ## custom imports ##
import Container from 'components/Container';
import WalletMain from 'pages/Main';
import TransactionSend from 'pages/Send';
import TransactionConfirm from 'pages/Confirm';

const AppRouter = () => {
  const location = useLocation();
  const transitions = useTransition(location, (locat) => locat.pathname, {
    initial: { opacity: 1 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <>
      {transitions.map(({ item, props, key }) => (
        <animated.div
          style={{
            ...props,
            position: 'absolute',
            top: '0',
            left: '0',
            height: '100%',
            width: '100%',
            boxSizing: 'border-box',
          }}
          key={key}
        >
          <Container>
            <Switch location={item}>
              <Route exact path="/send" component={TransactionSend} />
              <Route exact path="/confirm" component={TransactionConfirm} />
              <Route exact path="/" component={WalletMain} />
            </Switch>
          </Container>
        </animated.div>
      ))}
    </>
  );
};

export default AppRouter;
