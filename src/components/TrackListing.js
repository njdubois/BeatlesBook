import React, { Component } from 'react';
import trackDetailsJsonString from '../trackDetailsJson';
import styled from 'styled-components';

const Main = styled.div`
height:100%;
`;

const AlbumName = styled.div`
  padding:25px;
  border: 1px solid black;
  cursor:pointer;
  
  &:hover {
    background-color: lightblue;
  }
  
  &.selected {
    background-color: lightblue;
  }
`;

const SongName = styled.div`
  padding:25px;
  border: 1px solid black;
  cursor:pointer;
  
  &:hover {
    background-color: lightblue;
  }
  
  &.selected {
    background-color: lightblue;
  }
`;

const SongPageContainer = styled.div`
max-height:50%;
max-width:100%;
width:5000px;
overflow-x: scroll;
white-space: nowrap;
`;

const SongPage = styled.img`
  height:700px;
border-right: 1px solid black;
&:last-child
{
  border-right : 0;
}
  
`;

const ASongWrapper = styled.div`
  display:inline-block;
  position:relative;
`;

const SongTitle = styled.div`
  text-align:left;
  position:absolute;
  top:0;
  left:0;
  height:25px;
  display:inline-block;
`;

class TrackListing extends Component {
  state = {
    album: false,
    track: false,
    page: false
  };

  setAlbum = (album) => {
    console.log("album : ", album);
    this.setState({album: album});
  };

  setSong = (song) => {
    this.setState({song: song});
  };

  clearAlbum = () => {
    this.setState({album: false});
  };

  clearSong = () => {
    this.setState({song: false});
  };

  render() {
    return (
      <Main>
        {!this.state.album && trackDetailsJsonString.map((album) => {
          return (
            <AlbumName
              onClick={() => this.setAlbum(album.albumName)}>
              {album.albumName}
            </AlbumName>
          );
        })}

        {this.state.album && (
          <div>
            <SongName onClick={() => this.clearAlbum()}><b>BACK</b></SongName>
            <SongPageContainer>
            {trackDetailsJsonString.find(a => a.albumName === this.state.album)
              .trackList.map(song => {
                return song.trackPageDetails.map(
                      trackPages => {
                        return (
                          <ASongWrapper>
                            <SongTitle>
                              <a href={`#${trackPages.fileName}`}></a>
                              {`${song.track} ${song.trackTitle}`}
                            </SongTitle>
                            <SongPage src={`songImages/${trackPages.fileName}.jpg`} />
                          </ASongWrapper>
                        )
                      }
                    )
              })}
              </SongPageContainer>
          </div>
        )}

        {/*{this.state.song &&*/}
        {/*  <SongPageContainer>*/}
        {/*    <SongName onClick={() => this.clearSong()}><b>BACK</b></SongName>*/}
        {/*    {trackDetailsJsonString.find(a => a.albumName === this.state.album)*/}
        {/*      .trackList.find(t => t.track === this.state.song)*/}
        {/*      .trackPageDetails.map(*/}
        {/*      trackPages => {*/}
        {/*        return (*/}
        {/*          <SongPage src={`songImages/${trackPages.fileName}.jpg`} />*/}
        {/*        )*/}
        {/*    }*/}
        {/*    )}*/}
        {/*  </SongPageContainer>*/}
        {/*}*/}
      </Main>
    );
  }
}

export default TrackListing;
