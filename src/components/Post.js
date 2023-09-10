import React from 'react'
import image from '../images/image.png'

const Post = () => {
    return (
        <div className='bg-white flex flex-col rounded-[10px] p-10'>
            <h1 className='font-serif italic text-[80px] uppercase'>THIS IS THE HEADING</h1>
            <p className='font-serif text-gray-600 text-end'>10 september, 2023</p>

            <img src={image} alt="artikel bild" className='h-80 object-cover my-10' />

            <p className='columns-2 gap-10'>Arvid Gren strävade därefter att åter göra gården till en sammanhängande enhet. Han var mycket intresserad av trädgård och anställde 1840 som trädgårdsmästare Anders Jonsson och de planterade på ägorna tusentals träd av olika slag. Tanken var att anlägga en engelsk park på de kala bergen runt gården. De flesta träden planterades under 1860- och 1870-talen, exempelvis sattes 1866 1 857 plantor, 1867 1 000 plantor, 1868 1 844 plantor och 1869 1 605 plantor. Gren ville variera trädslagen för att öka färgskiftningen i lövverken över årstiderna. Huvuddelen av planteringarna skedde på Lilla Änggården vars utmarker nu tillhör Botaniska. Arvid Gren strävade därefter att åter göra gården till en sammanhängande enhet. Han var mycket intresserad av trädgård och anställde 1840 som trädgårdsmästare Anders Jonsson och de planterade på ägorna tusentals träd av olika slag. Tanken var att anlägga en engelsk park på de kala bergen runt gården. De flesta träden planterades under 1860- och 1870-talen, exempelvis sattes 1866 1 857 plantor, 1867 1 000 plantor, 1868 1 844 plantor och 1869 1 605 plantor. Gren ville variera trädslagen för att öka färgskiftningen i lövverken över årstiderna. Huvuddelen av planteringarna skedde på Lilla Änggården vars utmarker nu tillhör Botaniska.</p>
        </div>
    )
}

export default Post