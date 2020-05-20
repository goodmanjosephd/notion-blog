import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/jg_goodman_" target="_blank" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="mailto:joe@joegoodman.me" target="_blank" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Gatsby Starter Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li><li>Powered with Notion</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
