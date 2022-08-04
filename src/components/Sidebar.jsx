import './Sidebar.css'

const Sidebar = () => {

    return(
        <section className="sidebar">
            <div className="edu"><span>Eduglobe</span></div>
            <div className="option-wrapper">
                <div className="dash-opts-top">
                    <div className="single-opt">
                        <div className="d-img">
                            <img src="" alt="" />
                        </div>
                        <span>Dashboard</span>               
                    </div>
                    <div className="single-opt">
                        <div className="d-img">
                            <img src="" alt="" />
                        </div>
                        <span>Program</span>
                        <div className="down-arrow">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="single-opt">
                        <div className="d-img">
                            <img src="" alt="" />
                        </div>
                        <span>Admission</span>
                        <div className="down-arrow">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="single-opt">
                        <div className="d-img">
                            <img src="" alt="" />
                        </div>
                        <span>Profile</span>
                        <div className="down-arrow">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="single-opt">
                        <div className="d-img">
                            <img src="" alt="" />
                        </div>
                        <span>Inbox</span>
                    </div>
                    <div className="single-opt">
                        <div className="d-img">
                            <img src="" alt="" />
                        </div>
                        <span>Webinar</span>
                        <div className="down-arrow">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <div className="dash-opts-bottom">
                    <div className="single-opt">
                        <div className="d-img">
                            <img src="" alt="" />
                        </div>
                        <span>Refer and Earn</span>
                    </div>
                    <div className="single-opt">
                        <div className="d-img">
                            <img src="" alt="" />
                        </div>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sidebar;