import React from 'react'
import PlaceHolderImg from '../../assets/placeholder.png'

export function Card({ nft, onClick }) {
  const mediaType = nft?.media[0]?.format
  return (
    <div
      className="flex max-w-sm cursor-pointer flex-col gap-2 rounded-3xl bg-slate-800 p-3 hover:animate-pulse hover:shadow-md"
      onClick={() => onClick()}
    >
      <div className="flex h-60 items-center justify-center">
        {mediaType === 'mp4' ? (
          <video width="350" height="350" className="h-60" controls autoPlay>
            <source src={nft?.media[0]?.raw} type="video/mp4" />
          </video>
        ) : (
          <img className="h-60 rounded-3xl" src={nft?.media[0]?.thumbnail || PlaceHolderImg} alt="" />
        )}
      </div>
      <div className="flex flex-col text-center">
        <div className="text-pink-500">{nft?.title || `#${nft?.tokenId}`}</div>
        <div className="font-medium text-cyan-500">{nft?.contract?.name}</div>
      </div>
    </div>
  )
}
