#!/bin/bash

# The Healing Miracles - Local Development Server
# ================================================

PORT=${1:-8000}
HOST="localhost"

echo ""
echo "✨ The Healing Miracles - Local Server ✨"
echo "=========================================="
echo ""
echo "Starting server at: http://${HOST}:${PORT}"
echo ""
echo "Pages available:"
echo "  • Home:         http://${HOST}:${PORT}/"
echo "  • About:        http://${HOST}:${PORT}/about.html"
echo "  • Services:     http://${HOST}:${PORT}/services.html"
echo "  • Testimonials: http://${HOST}:${PORT}/testimonials.html"
echo "  • Resources:    http://${HOST}:${PORT}/resources.html"
echo "  • FAQ:          http://${HOST}:${PORT}/faq.html"
echo "  • Contact:      http://${HOST}:${PORT}/contact.html"
echo ""
echo "Press Ctrl+C to stop the server"
echo "=========================================="
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server ${PORT}
# Fallback to Python 2
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer ${PORT}
# Try PHP built-in server
elif command -v php &> /dev/null; then
    php -S ${HOST}:${PORT}
else
    echo "Error: No suitable server found."
    echo "Please install Python 3 or PHP."
    exit 1
fi
