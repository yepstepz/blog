import { ImageResponse } from 'next/og'
import * as process from "process";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const logoUrl = `${process.env.HOME_URL}/title-image.png`
  const title = searchParams.get('title') || 'yepstepz.io';

  const rssIcon = 'https://yepstepz.io/rss-logo.png';
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '1200px',
          height: '630px',
          backgroundImage: 'radial-gradient(circle, white, #f0e5ff)',
          color: '#ffffff',
          fontFamily: 'Arial, sans-serif',
          padding: '40px',
          boxSizing: 'border-box',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {logoUrl && (
          <div
            style={{
              position: 'absolute',
              top: '30px',
              left: '30px',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={logoUrl}
              alt="Logo"
              style={{ width: '70px', height: '70px', borderRadius: '50%' }}
            />
          </div>
        )}
        <h1 style={{fontFamily: 'Inter, sans-serif', fontSize: '64px', fontWeight: 'bold', marginBottom: '10px', color: '#a36fe6'}}>{title}</h1>
        {/* Social icons row */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '30px',
            display: 'flex',
            gap: '10px',
          }}
        >
          {[rssIcon].map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt="Social Icon"
              style={{
                width: '30px',
                height: '30px',
                padding: '5px',
              }}
            />
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
