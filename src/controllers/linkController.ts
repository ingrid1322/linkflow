import { Request, Response } from 'express';
import { createShortLink, getLinkByCode, getAllLinks, deleteLinkById } from '../services/linkService';

export async function shortenUrl(req: Request, res: Response) {
  try {
    const { originalUrl, customCode } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ error: 'A URL original é obrigatória.' });
    }

    const newLink = await createShortLink(originalUrl, customCode);
    return res.status(201).json(newLink);
  } catch (error: any) {
    if (error.message === 'CUSTOM_CODE_IN_USE') {
      return res.status(409).json({ error: 'Esse apelido já está em uso. Escolha outro!' });
    }
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

export async function deleteLink(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    await deleteLinkById(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao excluir o link.' });
  }
}