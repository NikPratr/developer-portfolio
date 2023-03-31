import { useEffect } from 'react';

const Project = ({ title, picture, description, github, deployment, id }) => {
    useEffect(() => {
        const container = document.querySelector(`.project-container-${id}`);
        const img = document.querySelector(`.project-image-${id}`);

        const handleMouseMove = event => {
            const rect = container.getBoundingClientRect();
            const posX = event.clientX - rect.left;
            const posY = event.clientY - rect.top;
            const percentX = ((posX / container.clientWidth) * 10) - 5;
            const percentY = ((posY / container.clientHeight) * 10) - 5;

            const translateX = percentX + "%";
            const translateY = percentY + "%";

            if (posY <= 0) {
                img.style.transform = `scale(1.1) translate(${translateX}, -5%)`;
            } else if (posY >= rect.height) {
                img.style.transform = `scale(1.1) translate(${translateX}, 5%)`;
            } else if (posX <= 0) {
                img.style.transform = `scale(1.1) translate(-5%, ${translateY})`;
            } else if (posX >= rect.width) {
                img.style.transform = `scale(1.1) translate(5%, ${translateY})`;
            } else {
                img.style.transform = `scale(1.1) translate(${translateX}, ${translateY})`;
            }
        };

        const handleMouseLeave = () => {
            img.style.transform = 'none';
        };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [id]);

    return (
        <div className={`project-container project-container-${id}`}>
            <div className="project-image-container">
                <img className={`project-image project-image-${id}`} src={picture} alt={title} />
            </div>
            
            <div className="project-info">
                <h3 className='project-title-inside'>{title}</h3>
                <p>{description}</p>
                
                <div className="project-links">
                    {github ? <a className='project-link' href={github} target='_blank'>Github</a> : ''}
                    {deployment ? <a className='project-link' href={deployment} target='_blank'>Deployment</a> : ''}
                </div>
            </div>
        </div>
    );
}

export default Project;