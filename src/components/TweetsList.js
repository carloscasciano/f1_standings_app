
import React from "react"
import { TwitterTimelineEmbed } from "react-twitter-embed"
import Grid from "@material-ui/core/Grid"

const TweetsList = () => {

  return (

    <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"       
        >
      <div className="twitterContainer">
      <div className="twitter-embed">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="f1"
          options={{
            tweetLimit: "10",
            width: 600,
            height: 350
          }}
          theme="light"
          noHeader={true}
          noBorders={true}
          noFooter={true}
        ></ TwitterTimelineEmbed>
      </div>
    </div>

    </Grid>
    
  )
}


export default TweetsList