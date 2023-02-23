
export function sakuraService() {
  const url = "http://127.0.0.1:8000";
  
  try {
    const response =  fetch(
      url
    )
      .then((response) => response.json())
      
    return  response;
  } catch (error) {
    return [];
  }
  
}