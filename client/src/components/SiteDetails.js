import MERN from '../Assests/images/MERN.png'
import '../CSS/SiteDetails.css'


function SiteDetails() {
    return (
        <div>
            <div className="text">
            This website is built using the MERN stack. The front-end is all React, which uses a Node with Express API back-end server. The back-end also incorporates a
            MongoDB database for storing information needed for the site. The back-end server is hidden behind a reverse proxy and not accessible by the client directly. All of this
            runs on one AWS Lightsail instance running Debian.<br/><br/>

            The site collects a client's IP address when they connect. This is used to record the traffic on the website and the organization who is connecting. All of this is 
            stored in the MongoDB database. If the client's IP is unique and not in the database, a 3rd party API call will be sent out to retrieve the IP's organizational 
            information if available. This is used on the home page to change the graphic at the bottom from displaying "Now hiring at your company" to "Now hiring at 
            [organization's name]"". Since the service I am using to retrieve the IP information only allows a certain number of IP look ups a minute, it was important to make 
             use of their service as efficiently as possible. This is the reason the site only makes the API call when the visitor is unique to my database. 
            <br/><br/>
            Visually here is how it all comes together:

            </div>
                <img src={MERN} className="image" alt="Site Design" />
        </div>

    )
}

export default SiteDetails;