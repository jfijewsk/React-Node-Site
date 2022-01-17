export default  function SiteInfo (){
    return (

        <div className="api">
            The company name REST API calls using this site 'https://ip-api.com/'. Their free API requests limit at 45 a minute so in later versions of the site
            this issue will need to be addressed.

            React calls an api get reqest from the node server. Express gets the clients ip address then calls to a 3rd party API to look up the clients ip information. 
            This is used to record the traffic on the website and the orginzation who is connecting is displayed in the last "Now hiring" banner on the home page. If the
            IP address is not affilated with a company then "your company" is displayed in the last banner on the home page.

        <div> 
            The website is made of an React front-end with a Node.js with express back-end connected to a MongoDB database. All of this is running on one instance hosted
            on an Linuix AWS Lightsail virtual machine. 
        </div>



        </div>

    )

    
}