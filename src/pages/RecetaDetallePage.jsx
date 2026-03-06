import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import RecetaDetalle from '../components/RecetaDetalle';
import recetas from '../data/recetas';

export default function RecetaDetallePage() {
    const { slug } = useParams();
    const receta = recetas.find((r) => r.slug === slug);

    if (!receta) {
        return (
            <div className="page-container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
                <h2>Receta no encontrada</h2>
                <p>La receta que buscas no existe o ha sido movida.</p>
                <Link to="/nutricion" className="btn-ver-todas">← Ver todas las recetas</Link>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>{receta.titulo} | SerenaViaFit</title>
                <meta name="description" content={receta.descripcion} />
            </Helmet>
            <RecetaDetalle
                titulo={receta.titulo}
                imagen={receta.imagen}
                nutricion={receta.nutricion}
                beneficios={receta.beneficios}
                ingredientes={receta.ingredientes}
                pasos={receta.pasos}
            />
        </>
    );
}
