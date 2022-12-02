import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import ThemeContext from '../context/ThemeContext';
import '../assets/sass/resume.scss';
import avatar from '../assets/images/avatar.png';
import config from '../../config';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <ThemeContext.Consumer>
            {theme => (
              <>
                <Helmet
                  title={data.site.siteMetadata.title}
                  meta={[
                    { name: 'description', content: config.manifestName },
                    { name: 'keywords', content: 'site, web' },
                    { name: 'og:site_name', content: config.siteTitle },
                    { name: 'og:type', content: "website" },
                    { name: 'og:title', content: config.siteTitle },
                    { name: 'og:description', content: config.manifestName },
                    { name: 'og:image', content: avatar },
                    { name: 'twitter:image', content: avatar }
                  ]}
                >
                  <html lang="en" />
                  <body className={theme.dark ? 'dark' : 'lite'} />
                </Helmet>
                <div className={'main-body'}>{children}</div>
              </>
            )}
          </ThemeContext.Consumer>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
