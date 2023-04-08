import { TwitterTimelineEmbed } from "react-twitter-embed"

export const SocialNetworkPreview = () => {
    return (
        <aside>
            <TwitterTimelineEmbed
                lang="he"
                sourceType="profile"
                screenName="MaccabiPedia"
                options={{ height: 400 }}
                noScrollbar
                tweetLimit={0}
                noHeader
            />
        </aside>
    )
}