const socket = new WebSocket('ws://localhost:8080');

socket.onmessage = (event) => {
  const value = event.data;
  const event = new CustomEvent('input', { detail: value });
  document.dispatchEvent(event);
};