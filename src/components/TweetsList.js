
import React from "react"
//import React, { useEffect } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed"

const TweetsList = () => {
  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="f1"
          options={{
            tweetLimit: "10",
            width: "100%",
            height: "100%"
          }}
          theme="light"
          noHeader={true}
          noBorders={true}
          noFooter={true}
        ></ TwitterTimelineEmbed>
      </div>
    </section>
  )
}


export default TweetsList