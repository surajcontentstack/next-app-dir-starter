
import React, { useState, useEffect } from "react";
import { getPageRes } from "../helper";
import Skeleton from "react-loading-skeleton";
import { Props, Context } from "../typescript/pages";
import { onEntryChange } from "@/utils";
import RenderComponents from "./RenderComponents";
import { useCallback } from "react";

export default async function Home(props: Props) {
    const entryResponse = await getPageRes("/");

    return entryResponse ? (
        <RenderComponents
            pageComponents={entryResponse.page_components}
            contentTypeUid="page"
            entryUid={entryResponse.uid}
            locale={entryResponse.locale}
        />
    ) : (
        <Skeleton count={3} height={300} />
    );
}
