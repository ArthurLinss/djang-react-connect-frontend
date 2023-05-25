
export const VideoYoutube = (props) => {
    const { url } = props;
    let s = url;
    if (s.length > 0) {
      return (
        <div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 20 }}>
            <iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      );
    }
  };
  