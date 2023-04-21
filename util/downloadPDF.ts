const downloadPdf = async (filename: string) => {
    const response = await fetch(`/data/resume.pdf`); // Replace "filename.pdf" with the name of your PDF file
    const blob = await response.blob(); // Get the PDF file as a Blob object
    const url = window.URL.createObjectURL(new Blob([blob])); // Create a URL for the Blob object

    // Create a temporary link element and initiate a file download
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default downloadPdf;

