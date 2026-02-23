import Youtube from "react-youtube";

export default function Background() {
    const videoIds = ["RW6GQAtGKJ0","S1RsXH_AGrk","L5jOrty19WQ","gtD1YDt61Xs","H5wqsWIsYuU","dV-U_B7v3TQ","HCf2uewooDU","ML7XrNZK_kQ&t","0ELc6Xm11ck","dN_VZ_MIQ8U","-nYHwTfrqZM","nIDeIDUCYMA","NerzMCCucEo","E4d7AIPSpOA","XYUIYfOZu-M"];

    const opts = {
        playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            loop: 1,
            playlist: videoIds.join(","),
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            playsinline: 1,
            cc_load_policy: 1,
            cc_lang_pref: "en",
        },
    };

    return (
        <div className="video-background">
            <Youtube videoId={videoIds[0]} opts={opts} 
                className="youtube-iframe" 
                /* 
                onReady = {onReady}
                onEnd = {onEnd} 
                */
            />
            <div className="video-overlay" />
        </div>
    )
}