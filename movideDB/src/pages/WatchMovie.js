import React from "react"
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"

const WatchMovie = () => {
  const { id } = useParams()

  return (
    <div className="bg-dark min-vh-100 text-light">
      <Navbar />

      <div className="container py-4">
        <div className="movie-wrapper mx-auto">
          {/* Header */}
          <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
            <div>
              <h2 className="fw-bold mb-1">Watch Full Movie</h2>
              <p className="text-secondary mb-0">
                Enjoy your movie in full screen quality
              </p>
            </div>

            <button
              className="btn btn-danger px-4 fw-semibold"
              onClick={() => window.history.back()}
            >
              Back
            </button>
          </div>

          {/* Player Card */}
          <div className="player-card overflow-hidden rounded-4 shadow-lg border border-secondary-subtle">
            <div className="ratio ratio-16x9 bg-black">
              <iframe
                src={`https://www.vidking.net/embed/movie/${id}`}
                title="Movie Player"
                frameBorder="0"
                allowFullScreen
                className="rounded-4"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .movie-wrapper {
          max-width: 1400px;
        }

        .player-card {
          background: #111;
          backdrop-filter: blur(10px);
          transition: 0.3s ease;
        }

        .player-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.45);
        }

        iframe {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
}

export default WatchMovie