type NodeRequestLike = {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
};

type NodeResponseLike = {
  status(code: number): NodeResponseLike;
  json(body: unknown): void;
};

export function isWebRequest(request: Request | NodeRequestLike): request is Request {
  return typeof (request as Request).json === "function";
}

export async function readJsonBody(request: Request | NodeRequestLike) {
  if (isWebRequest(request)) {
    return request.json();
  }

  return request.body ?? {};
}

export function getRequestMethod(request: Request | NodeRequestLike) {
  if (isWebRequest(request)) {
    return request.method;
  }

  return request.method ?? "GET";
}

export function getHeaderValue(request: Request | NodeRequestLike, name: string) {
  if (isWebRequest(request)) {
    return request.headers.get(name);
  }

  const rawValue = request.headers?.[name] ?? request.headers?.[name.toLowerCase()];

  if (Array.isArray(rawValue)) {
    return rawValue[0] ?? null;
  }

  return rawValue ?? null;
}

export function sendJson(body: unknown, status = 200, response?: NodeResponseLike) {
  if (response) {
    response.status(status).json(body);
    return;
  }

  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
