import ReactGA from 'react-ga';

export const initAnalytics = () => {
  if (typeof window !== 'undefined') {
    ReactGA.initialize('UA-98315239-1');
  }
};

export const trackPageView = () => {
  if (typeof window !== 'undefined') {
    const page = window.location.pathname;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }
};
