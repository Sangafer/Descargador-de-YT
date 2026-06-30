from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import yt_dlp
import os

app = Flask(__name__)
CORS(app)

ydl_common_opts = {
    'user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    'quiet': True,
    'no_warnings': True
}

@app.route('/analizar', methods=['POST'])
def analizar():
    data = request.json
    url = data.get('url')
    
    opts = ydl_common_opts.copy()
    with yt_dlp.YoutubeDL(opts) as ydl:
        info = ydl.extract_info(url, download=False)
        return jsonify({
            'titulo': info.get('title'),
            'duracion': info.get('duration_string'),
            'thumbnail': info.get('thumbnail')
        })


@app.route('/descargar', methods=['POST'])
def descargar():
    data = request.json
    url = data.get('url')
    formato = data.get('formato')

    ydl_opts = ydl_common_opts.copy()
    ydl_opts.update({
        'format': 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best' if formato == 'mp4' else 'bestaudio/best',
        'outtmpl': 'downloads/%(title)s.%(ext)s',
    })

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(url, download=True)

        filename = ydl.prepare_filename(info)
    return send_file(filename, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)