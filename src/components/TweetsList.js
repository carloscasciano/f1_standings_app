
import React from "react"
import { TwitterTimelineEmbed } from "react-twitter-embed"
import Grid from "@material-ui/core/Grid"
import { useMediaQuery } from 'react-responsive'

const TweetsList = () => {

  //media queries
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})

  return (

    <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"       
        >
      <div className="twitterContainer">
      <div className="twitter-embed">

      {isDesktopOrLaptop &&
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
        />
        }

      {isTabletOrMobile &&
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="f1"
          options={{
            tweetLimit: "10",
            width: 300,
            height: 250
          }}
          theme="light"
          noHeader={true}
          noBorders={true}
          noFooter={true}
        />
      }
        
        
      </div>
    </div>

    </Grid>
    
  )
}


export default TweetsList