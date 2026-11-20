export default function PatentResearch() {
  return (
    <section id="research" className="section">
      <div className="section-header">
        <h2>Patent &amp; Research</h2>
        <p>Published patent application and peer-reviewed remote sensing research.</p>
      </div>

      <div className="patent-grid">
        <article className="project-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
            <h3 style={{ margin: 0 }}>Vehicle Performance Verification &amp; Interactive Showroom Simulation</h3>
            <span
              style={{
                fontSize: '11px',
                fontWeight: '600',
                padding: '3px 8px',
                borderRadius: '6px',
                background: 'rgba(229, 181, 103, 0.15)',
                color: '#e5b567',
                border: '1px solid rgba(229, 181, 103, 0.3)',
                whiteSpace: 'nowrap',
              }}
            >
              Patent Application
            </span>
          </div>
          <p className="project-summary">
            Indian Patent Office · Application No. 202611071188 · Published: Aug 2026
          </p>
          <ul className="project-bullets">
            <li>
              <strong>Co-inventors:</strong> Samriddhi Khandelwal, Sneha Yadav, Gaurav Yadav, Vishal Singh Kushwaha.
            </li>
            <li>
              IoT, Computer Vision, and Machine Learning platform engineered to verify manufacturer-claimed vehicle performance metrics in real time.
            </li>
            <li>
              Powers an interactive showroom simulation environment linking physical telemetry data with computer vision and predictive ML models.
            </li>
            <li>
              <strong>Status:</strong> Patent application filed (Jun 2026) and published (Aug 2026) by the Indian Patent Office.
            </li>
          </ul>
          <div className="tag-row">
            <span>IoT</span>
            <span>Computer Vision</span>
            <span>Machine Learning</span>
            <span>Telemetry</span>
            <span>Indian Patent Office</span>
          </div>
          {/* Publication Link: [ADD LINK] */}
        </article>

        <article className="project-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
            <h3 style={{ margin: 0 }}>Crop Classification Using Sentinel-1 SAR Time-Series</h3>
            <span
              style={{
                fontSize: '11px',
                fontWeight: '600',
                padding: '3px 8px',
                borderRadius: '6px',
                background: 'rgba(106, 215, 221, 0.15)',
                color: '#6ad7dd',
                border: '1px solid rgba(106, 215, 221, 0.3)',
                whiteSpace: 'nowrap',
              }}
            >
              Research Paper
            </span>
          </div>
          <p className="project-summary">
            Co-author · Greater Noida Rabi 2023–24 Season Remote Sensing Study
          </p>
          <ul className="project-bullets">
            <li>
              Co-authored research study on crop type identification and spatial distribution using multitemporal synthetic aperture radar (SAR).
            </li>
            <li>
              Processed Sentinel-1 SAR imagery (GRD, IW mode, VV/VH dual-polarization) on Google Earth Engine.
            </li>
            <li>
              Trained Random Forest model (100 estimators), achieving <strong>98.77% overall accuracy</strong> and <strong>Kappa coefficient of 0.98</strong>.
            </li>
            <li>
              Presented and defended study methodology and evaluated spatial autocorrelation limitations.
            </li>
          </ul>
          <div className="tag-row">
            <span>Google Earth Engine</span>
            <span>Sentinel-1 SAR</span>
            <span>Random Forest</span>
            <span>Remote Sensing</span>
            <span>Python</span>
          </div>
          {/* Research Paper Link: [ADD LINK] */}
        </article>
      </div>
    </section>
  );
}
