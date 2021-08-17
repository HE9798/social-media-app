import React from 'react'
import styled from 'styled-components'

import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded'

function RightSidebar() {

    const recentActivity = (activity) => (
        <RecentActivity>
            <span><ErrorOutlineRoundedIcon /></span>
            <p>{ activity }</p>
        </RecentActivity>
    )

    return (
        <RightSidebarContainer>
            <Top>
                <h3>Highlights</h3>
                <div>
                    <p>Top Liked Post</p>
                    <Contents>
                        <FavoriteRoundedIcon />
                        <h4>884</h4>
                    </Contents>
                    <p>40 New Likes This Week</p>
                </div>
            </Top>
            <Bottom>
                <h3>Recent Activity</h3>
                { recentActivity('Jack Liked your post') }
                { recentActivity('Amy Shared your post') }
                { recentActivity('Samantha mentioned you in a Comment') }
                { recentActivity('James Liked your Video') }
                { recentActivity('An Event you are following is approaching') }
            </Bottom>
        </RightSidebarContainer>
    )
}

export default RightSidebar

const RightSidebarContainer = styled.div`
    position: sticky;
    top: 100px;
    flex: 0.2;
    text-align: center;
    height: fit-content;

    div > p {
        color: gray;
    }
`

const Top = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 20px 0;
    box-shadow: 1px 1px 0 2px rgba(0, 0, 0, 0.20);

    > h3 {
        padding-bottom: 20px;
    }


    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    > div > p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 300px;
        font-size: 14px;
    }
`

const Contents = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0;
    font-size: 30px;

    > .MuiSvgIcon-root {
        color: var(--secondary-color);
        font-size: 40px;
        padding: 0 10px;
    }
`

const Bottom = styled.div`
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;
    border-bottom: 0;
    border-radius: 10px;
    background-color: white;
    padding: 20px 10px;
    box-shadow: 1px 1px 0 2px rgba(0, 0, 0, 0.20);

    > h3 {
        padding-bottom: 20px;
    }
`

const RecentActivity = styled.div`
    display: flex;
    align-items: center;
    text-align: left;

    > span > .MuiSvgIcon-root {
        color: var(--secondary-color);
        padding-left: 10px;
    }

    > p {
        padding: 10px;
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
    }

    :hover {
        border-radius: 50px;
        cursor: pointer;
        background-color: #e9e9e9;
    }
`