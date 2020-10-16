import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../img/Map-marker.svg';
import '../styles/pages/orphanage-map.css';


function OrphanagesMap() {
    return (
        <div id="page-map">
          <aside>
              <header>
                  <img src={mapMarkerImg} alt="" />

                  <h2>Escolha um orfanato no mapa</h2>
                  <p>Muitas crinças estão esperando a sua visita </p>
              </header>

              <footer>
                  <strong>Luanda</strong>
                  <span>Futungo de Belas</span>
              </footer>
          </aside>

          <Map 
            center={[-8.9200517,13.1625117]}
            zoom={16}
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer  url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          </Map>

          <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#FFF" />
          </Link>
        </div>
    )
}
export default OrphanagesMap;
