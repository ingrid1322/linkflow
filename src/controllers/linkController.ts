import { Request, Response } from 'express';
import { createShortLink, getLinkByCode, getAllLinks } from '../services/linkService';

export async function shortenUrl(req: Request, res: Response) {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ error: 'A URL original é obrigatória.' });
    }

    const newLink = await createShortLink(originalUrl);
    return res.status(201).json(newLink);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao encurtar a URL.' });
  }
}

export async function redirectUrl(req: Request, res: Response) {
  try {
    const code = String(req.params.code);
    const link = await getLinkByCode(code);

    if (!link) {
      return res.status(404).json({ error: 'Link não encontrado.' });
    }

    return res.redirect(link.originalUrl);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao redirecionar.' });
  }
}

export async function listLinks(req: Request, res: Response) {
  try {
    const links = await getAllLinks();
    return res.json(links);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao listar os links.' });
  }
}