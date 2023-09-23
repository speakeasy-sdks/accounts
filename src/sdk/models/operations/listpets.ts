/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListPetsRequest extends SpeakeasyBase {
    /**
     * How many items to return at one time (max 100)
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;
}

export class ListPetsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * unexpected error
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    @SpeakeasyMetadata()
    headers?: Record<string, string[]>;

    /**
     * A paged array of pets
     */
    @SpeakeasyMetadata({ elemType: shared.Pet })
    pets?: shared.Pet[];

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
