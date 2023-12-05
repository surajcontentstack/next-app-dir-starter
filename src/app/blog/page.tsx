import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { onEntryChange } from "@/utils";
import { useCallback } from "react";
import { Props } from "@/typescript/pages";
import { getPageRes } from "@/helper";
import RenderComponents from "../RenderComponents";

export default async function Home(props: Props) {

    const entryResponse = await getPageRes("/blog");

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
