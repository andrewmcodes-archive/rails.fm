import React, { FunctionComponent } from 'react'
import { Podcast } from '../podcast'
import { StaticQuery, graphql } from 'gatsby'

export const Podcasts: FunctionComponent = () => (
  <StaticQuery
    query={graphql`
      query PodcastsQuery {
        allPodcastsJson {
          edges {
            node {
              name
              description
              url
              image
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <div className='py-12'>
          <div className='max-w-xl px-4 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
              {getPodcasts(data)}
            </div>
          </div>
        </div>
      </>
    )}
  />
)

function getPodcasts(data) {
  const podcastsArray = []
  data.allPodcastsJson.edges.forEach((item) =>
    podcastsArray.push(
      <Podcast
        key={item.node.name}
        name={item.node.name}
        description={item.node.description}
        url={item.node.url}
        image={item.node.image}
      />
    )
  )
  return podcastsArray
}
